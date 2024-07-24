const Task = require('../models/Task');

// Criar uma nova tarefa
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({
      title,
      description,
      userId: req.user.userId,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar tarefa', error });
  }
};

// Obter todas as tarefas do usuário
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter tarefas', error });
  }
};

// Atualizar uma tarefa
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const task = await Task.findByIdAndUpdate(id, updates, { new: true });

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar tarefa', error });
  }
};

// Deletar uma tarefa
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }

    res.json({ message: 'Tarefa deletada' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar tarefa', error });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
