import { Router } from 'express';
import {
  createTeacher, deleteTeacher, getTeacherById, getTeachers, updateTeacher,
} from '../controllers/index.controller';

const router = Router();

router.get('/teachers', getTeachers);
router.get('/teachers/:id', getTeacherById);
router.post('/teachers', createTeacher);
router.put('/teachers/:id', updateTeacher);
router.delete('/teachers/:id', deleteTeacher);

export default router;
