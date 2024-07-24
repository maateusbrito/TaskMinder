const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para criar uma nova tarefa (protegida)
router.post('/', authMiddleware, createTask);

// Rota para obter todas as tarefas do usuário (protegida)
router.get('/', authMiddleware, getTasks);

// Rota para atualizar uma tarefa (protegida)
router.put('/:id', authMiddleware, updateTask);

// Rota para deletar uma tarefa (protegida)
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;
