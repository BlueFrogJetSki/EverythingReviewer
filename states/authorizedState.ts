import { ValidateJWT } from "~/services/AuthService/ValidateJWT"

// any .vue file or composable
//Checks if JWT is valid with server
const authorized = useState('authorized', async () => await ValidateJWT())
