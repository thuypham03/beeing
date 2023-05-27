import { Router } from 'express';
import { db, FieldValue } from './firebase-config';
import { UserWithId } from '../../common/db-types'

const routes = Router();
const userCollection = db.collection('user');

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.post('/new-user', (req, res) => {
  try {
    const { id, ...user } = req.body as UserWithId;
    userCollection.doc(id).set(user);
    res.status(201).send(user);
  } catch (err) {
    console.error(err);
    res.status(401).send('Error');
  }
});

export default routes;