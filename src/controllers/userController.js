const userService = require('../services/userService');

async function createUser(req, res) {
   try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
   } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
   }
}

async function getUser(req, res) {
   try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
         res.status(404).json({ error: 'User not found' });
      } else {
         res.json(user);
      }
   } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
   }
}

async function updateUser(req, res) {
   try {
      const user = await userService.updateUser(req.params.id, req.body);
      if (!user) {
         res.status(404).json({ error: 'User not found' });
      } else {
         res.json(user);
      }
   } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
   }
}

async function deleteUser(req, res) {
   try {
      const user = await userService.deleteUser(req.params.id);
      if (!user) {
         res.status(404).json({ error: 'User not found' });
      } else {
         res.json({ message: 'User deleted successfully' });
      }
   } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
   }
}

module.exports = {
   createUser,
   getUser,
   updateUser,
   deleteUser,
};
