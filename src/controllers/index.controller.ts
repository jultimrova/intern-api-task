import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '../db';

export const getTeachers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query('SELECT * FROM teacher');
    return res.status(200).json(response.rows);
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: e.message,
    });
  }
};

export const getTeacherById = async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id, 10);
  const response: QueryResult = await pool.query('SELECT * FROM teacher WHERE id = $1', [id]);
  return res.json(response.rows);
};

export const createTeacher = async (req: Request, res: Response): Promise<Response> => {
  const {
    firstName, lastName, gender, subjectTitle, experience,
  } = req.body;
  const response: QueryResult = await pool.query('INSERT INTO teacher (firstName, lastName, gender, subjectTitle, experience) VALUES ($1, $2, $3, $4, $5)', [firstName, lastName, gender, subjectTitle, experience]);
  console.log(response);

  return res.json({
    message: 'User created successfully',
    body: {
      teacher: {
        firstName,
        lastName,
        gender,
        subjectTitle,
        experience,
      },
    },
  });
};

export const updateTeacher = async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id, 10);
  const {
    firstName, lastName, gender, subjectTitle, experience,
  } = req.body;
  const response: QueryResult = await pool.query('UPDATE teacher SET firstName = $1, lastName = $2, gender = $3, subjectTitle = $4, experience = $5 WHERE id = $6', [firstName, lastName, gender, subjectTitle, experience, id]);
  console.log(response);
  return res.json(`Teacher with id = ${id} was successfully updated`);
};

export const deleteTeacher = async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id, 10);
  const response: QueryResult = await pool.query('DELETE FROM teacher WHERE id = $1', [id]);
  console.log(response);
  return res.json(`User with id ${id} was successfully deleted`);
};
