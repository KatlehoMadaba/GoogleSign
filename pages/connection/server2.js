//const { Sequelize } = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
const cors = require('cors');

const app = express();


  const sequelize = new Sequelize('wellness', 'Katore', 'RoadToAMilli#21',{
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  app.use(cors());

  const Device = sequelize.define('Device', {
    id: {
      type: DataTypes.JSON,
      primaryKey: true}
    // },
    // name: DataTypes.STRING,
    // surname: DataTypes.STRING,
    // email: DataTypes.STRING,
    // password: DataTypes.STRING
  });
  app.use(express.json());
  
  // Create a new device
  app.post('/devices', async (req, res) => {
    try {
      const device = await Device.create(req.body);
      res.json({
        success: true,
        message: 'Device created successfully',
        device
      });
    } catch (err) {
      res.send(err);
    }
  });
  
  // Get all devices
  app.get('/devices', async (req, res) => {
    try {
      const devices = await Device.findAll();
      res.json(devices);
    } catch (err) {
      res.send(err);
    }
    // try {
    // const sql = 'SELECT * FROM userinfo';
    // Device.query(sql, (err, results) => {
    //   if (err) throw err;
    //   res.json(results);
    //   console.log(results);
    // });} catch (err) {
    //     res.send(err);}

  });
  
  // Get a device by ID
  app.get('/devices/:id', async (req, res) => {
    try {
      const device = await Device.findByPk(req.params.id);
      if (!device) {
        res.json({
          success: false,
          message: 'Device not found'
        });
      } else {
        res.json(device);
      }
    } catch (err) {
      res.send(err);
    }
  });
  
  // Update a device
  app.put('/devices/:id', async (req, res) => {
    try {
      const device = await Device.findByPk(req.params.id);
      if (!device) {
        res.json({
          success: false,
          message: 'Device not found'
        });
      } else {
        await device.update(req.body);
        res.json({
          success: true,
          message: 'Device updated successfully',
          device
        });
      }
    } catch (err) {
      res.send(err);
    }
  });
  
  // Delete a device
  app.delete('/devices/:id', async (req, res) => {
    try {
      const device = await Device.findByPk(req.params.id);
      if (!device) {
        res.json({
          success: false,
          message: 'Device not found'
        });
      } else {
        await device.destroy();
        res.json({
          success: true,
          message: 'Device deleted successfully'
        });
      }
    } catch (err) {
      res.send(err);
    }
  });
  
  sequelize.sync().then(() => {
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  });