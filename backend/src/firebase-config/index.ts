import * as admin from 'firebase-admin';
import apiKeys from '../../../common/keys'

const hydrateServiceAccount = (): admin.ServiceAccount => {
  const privateKey = apiKeys.firebaseKeys.privateKey?.replace(/\\n/g, '\n');
  const projectId = apiKeys.firebaseKeys.projectId;
  const clientEmail = apiKeys.firebaseKeys.clientEmail;
  return { projectId, clientEmail, privateKey };
};

admin.initializeApp({
  credential: admin.credential.cert(hydrateServiceAccount()),
  databaseURL: apiKeys.firebaseKeys.databaseUrl,
});

const db = admin.firestore();
const auth = admin.auth();

const { FieldValue } = admin.firestore;

export { db, auth, FieldValue };
