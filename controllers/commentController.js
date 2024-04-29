import Comment from '../models/commentModel.js'

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json({ message: 'Comments obtenidos con exito', status: 200, data: comments });
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener comments', status: 500, data: [] });
    }
}

export const getCommentById = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await Comment.findById(id);
        if (!comment) {
            res.status(404).json({ message: 'Comment no encontrado', status: 404, data: comment });
            return
        }
        res.status(200).json({ message: 'Comment encontrado con exito', status: 200, data: comment });   
    } catch(err) {
        res.status(500).json({ message: 'Error al encontrar el comment', status: 500, data: [] });
    }
}

export const createComment = async (req, res) => {
    const commentInfo = req.body;
    try {
        const comment = new Comment(commentInfo);
        const newComment = await comment.save();
        res.status(200).json({ message: 'Comment creado con exito', status: 200, data: newComment });
        
    } catch(err) {
        res.status(500).json({ message: 'Error al crear comment', status: 500, data: [] });
    }
}

