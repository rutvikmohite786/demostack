import '../css/login.css';
import { useForm } from "react-hook-form";
function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <form className="box" action="#" method="post" onSubmit={handleSubmit(data => console.log(data))}>
                <h1>Contact as</h1>
                <input type="text" placeholder="enter email" {...register("email", { required: true, maxLength: 10 })} />
                {errors.email && <p>email is required.</p>}
                <textarea type="text" placeholder="message" {...register("message", { required: true, maxLength: 8 })}/>
                {errors.message && <p>message is required.</p>}
                <input type="submit" className ="submit" value="Submit"/>
            </form>
        </div>
    );
}
export default Contact;