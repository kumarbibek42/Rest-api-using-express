import app from './app';
import { PORT } from './constants/aplicationconstants';
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
