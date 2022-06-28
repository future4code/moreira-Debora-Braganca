import { app } from './controller/app';
import { dogWalkingRouter } from './router/dogWalkingRouter'

app.use("", dogWalkingRouter);
