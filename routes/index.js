import userRouter from './userRouter.js'
import postRouter from './postRouter.js'
import commentRouter from './commentRouter.js'

const routerApi = (app) => {
    app.use('/users', userRouter);
    app.use('/posts', postRouter);
    app.use('/comments', commentRouter);
}

export default routerApi;