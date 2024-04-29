import Post from '../models/postModel.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ message: 'Posts obtenidos con exito', status: 200, data: posts });
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener posts', status: 500, data: [] });
    }
}

export const getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) {
            res.status(404).json({ message: 'Post no encontrado', status: 404, data: post });
            return
        }
        res.status(200).json({ message: 'Post encontrado con exito', status: 200, data: post });   
    } catch(err) {
        res.status(500).json({ message: 'Error al encontrar el post', status: 500, data: [] });
    }
}

export const createPost = async (req,res) => {
    const postInfo = req.body;
    try {
        const post = new Post(postInfo);
        const newPost = await post.save();
        res.status(200).json({ message: 'Post creado con exito', status: 200, data: newPost });
        
    } catch(err) {
        res.status(500).json({ message: 'Error al crear post', status: 500, data: [] });
    }
}

