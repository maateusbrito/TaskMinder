const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rota para registrar usuário
router.post('/register', registerUser);

// Rota para login de usuário
router.post('/login', loginUser);

// Rota para obter o perfil do usuário (protegida)
router.get('/profile', authMiddleware, getUserProfile);

// Rota para atualizar o perfil do usuário (protegida)
router.put('/profile', authMiddleware, updateUserProfile);

// Rota para deletar o usuário (protegida)
router.delete('/profile', authMiddleware, deleteUser);

module.exports = router;
