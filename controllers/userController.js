import User from '../models/userModel.js'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ message: 'Usuarios obtenidos con exito', status: 200, data: users });
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener usuarios', status: 500, data: [] });
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado', status: 404, data: user });
            return
        }
        res.status(200).json({ message: 'Usuario encontrado con exito', status: 200, data: user });   
    } catch(err) {
        res.status(500).json({ message: 'Error al encontrar el usuario', status: 500, data: [] });
    }
}

export const createUser = async (req, res) => {
    const userInfo = req.body;
    try {
        const requiredFields = ['name', 'email', 'password', 'avatar'];
        const missingFields = requiredFields.filter(field => !(field in req.body));
        if (missingFields.length > 0) {
            return res.status(400).json({ message: `Faltan los siguientes campos: ${missingFields.join(', ')}`, status: 400, data: [] });
        }
        const emailAlreadyExist = User.find({ email: userInfo.email })
        if (emailAlreadyExist) {
            res.status(409).json({ message: 'Ya existe un usuario con este email', status: 500, data: [] });
        }
        const user = new User(userInfo);
        const newUser = await user.save();
        res.status(200).json({ message: 'Usuario creado con exito', status: 200, data: newUser });
        
    } catch(err) {
        res.status(500).json({ message: 'Error al crear usuario', status: 500, data: [] });
    }
}

