import {useRef, useState} from "react";
import "./form.css";

export const FormApprove = () => {
    const errorMessageText = "Заполните пожалуйста поля, чтобы нам было проще принимать решения.";

    const formRef = useRef();
    const [error, setError] = useState("");

    const isInputElement = (type) => type === "select-one" || type === "checkbox" || type === "text";

    const onSendHandl = (e) => {
        e.preventDefault();

        const formInputs = Object.values(formRef.current).filter((input) => isInputElement(input.type));
        const checkedCheckboxsValues = formInputs.filter((input) => input.checked).map((input) => input.value);
        const name = formInputs.filter((input) => input.name === "name").map((input) => input.value);
        const lastName = formInputs.filter((input) => input.name === "lastname").map((input) => input.value);
        const approve = formInputs.filter((input) => input.name === "approve").map((input) => input.value);

        if (!checkedCheckboxsValues.length || !name.length || !lastName.length) {
            setError(errorMessageText);
        } else {
            error.length && setError("");
            const messageApprove = approve !== "not" ? approve : "к сожалению не сможет присутствовать =(";
            const messageDrink = approve !== "not" ? ` и будет пить ${checkedCheckboxsValues.join(", ")}` : "."
            const Message = `<b>${lastName} ${name}</b> ${messageApprove}${messageDrink}`;
        }
    
        console.log(checkedCheckboxsValues, name, lastName, approve);
    }
    
    return <form onSubmit={onSendHandl} ref={formRef}>
        <label>
            <input className="input" name="name" pattern="^[А-Яа-яЁё\s]+$" placeholder="Имя" type="text" required={true}></input>
            <div className="message-required">Можно вводить только буквы</div>
        </label>
        <label>
            <input className="input" name="lastname" pattern="^[А-Яа-яЁё\s]+$" placeholder="Фамилия" type="text" required={true}></input>
            <div className="message-required">Можно вводить только буквы</div>
        </label>
        <label className="select-box">
            <span className="title">Присутствие:</span>
            <select required={true} name="approve">
                <option value="будет">Я буду</option>
                <option value="будет со своей половинкой">Я буду со своей половинкой</option>
                <option value="not">К сожалению не получится</option>
            </select>
        </label>
        <div className="checkboxes-container drink-checkboxes">
            <span className="title">Буду пить:</span>
            <label className="checkbox">
                <input type="checkbox" value="Вино" /> <span>Вино</span>
            </label>
            <label className="checkbox">
                <input type="checkbox" value="Водку" /> <span>Водку</span>
            </label>
            <label className="checkbox">
                <input type="checkbox" value="Коньяк" /> <span>Коньяк</span>
            </label>
            <label className="checkbox">
                <input type="checkbox" value="Шампанское" /> <span>Шампанское</span>
            </label>
            <label className="checkbox">
                <input type="checkbox" value="Что - нибудь безалкогольное" /> <span>Что - нибудь безалкогольное</span>
            </label>
        </div>
        <div className="btn-container">
            <input type="submit" value="Отправить"/>
            {error ? <p className="error-text">{error}</p> : null}
        </div>
    </form>
};