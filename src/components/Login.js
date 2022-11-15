import '../css/login.css';
import { useForm } from "react-hook-form";
import axios from "axios"
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <form className="box" action="#" method="post" onSubmit={handleSubmit(data => console.log(data))}>
                <h1>Login</h1>
                <input type="text" placeholder="enter email" {...register("email", { required: true, maxLength: 10 })} />
                {errors.email && <p>email is required.</p>}
                <input type="password" placeholder="Password" {...register("password", { required: true, maxLength: 8 })}/>
                {errors.password && <p>password is required.</p>}
                <input type="submit" className ="submit" value="Login"/>
            </form>
        </div>
    );
}
export default Login;