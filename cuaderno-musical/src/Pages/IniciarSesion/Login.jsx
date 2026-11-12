
import { useEffect, useState } from "react";
import "../../styles/Login.css";
import { useNavigate, useLocation } from "react-router-dom";

const CardBackground = ({ activeView }) => (
    <div className={`login-card-bg ${activeView === "login" ? "login" : ""}`} />
);

const SocialButtons = () => (
    <div className="login-social">
        <a href="#" className="social-facebook" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
        </a>
        <button type="button" class="google btn btn-light border d-flex align-items-center justify-content-center gap-2">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                width="18"
            />
        </button>

    </div >
);

const HeroPanel = ({
    type,
    activeView,
    title,
    text,
    buttonText,
    onToggle
}) => (
    <div className={`login-hero ${type} ${activeView === type ? "active" : ""}`}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button type="button" onClick={onToggle}>
            {buttonText}
        </button>
    </div>
);

const RegisterForm = ({
    activeView,
    onToggle,
    onRegister
}) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensaje, setMensaje] = useState("");

    const registrar = (e) => {
        e.preventDefault();
        setMensaje("");

        if (
            !nombre.trim() ||
            !apellido.trim() ||
            !correo.trim() ||
            !contrasena.trim()
        ) {
            setMensaje("Completa todos los campos.");
            return;
        }

        const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;
        const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!nombreValido.test(nombre.trim())) {
            setMensaje("Ingresa un nombre válido.");
            return;
        }

        if (!nombreValido.test(apellido.trim())) {
            setMensaje("Ingresa un apellido válido.");
            return;
        }

        if (!correoValido.test(correo.trim())) {
            setMensaje("Ingresa un correo electrónico válido.");
            return;
        }

        if (contrasena.trim().length < 6) {
            setMensaje("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        onRegister({
            nombre: nombre.trim(),
            apellido: apellido.trim(),
            correo: correo.trim().toLowerCase(),
            contrasena
        }, setMensaje);
    };

    return (
        <div className={`login-form register ${activeView === "register" ? "active" : ""}`}>
            <h2>Crear cuenta</h2>

            <SocialButtons />

            <p>O regístrate con tu correo electrónico</p>

            <form onSubmit={registrar}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    autoComplete="given-name"
                    required
                />

                <input
                    type="text"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    autoComplete="family-name"
                    required
                />

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    autoComplete="email"
                    required
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    autoComplete="new-password"
                    required
                />

                {mensaje && <p className="login-message">{mensaje}</p>}

                <button type="submit">REGISTRARME</button>
            </form>

            <button
                type="button"
                className="login-mobile-toggle"
                onClick={onToggle}
            >
                ¿Ya tienes una cuenta? <span>Inicia sesión</span>
            </button>
        </div>
    );
};

const LoginForm = ({
    activeView,
    onToggle,
    onLogin
}) => {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [mensaje, setMensaje] = useState("");

    const ingresar = (e) => {
        e.preventDefault();
        setMensaje("");

        if (!correo.trim() || !contrasena.trim()) {
            setMensaje("Ingresa tu correo y contraseña.");
            return;
        }

        onLogin({
            correo: correo.trim().toLowerCase(),
            contrasena
        }, setMensaje);
    };

    return (
        <div className={`login-form login ${activeView === "login" ? "active" : ""}`}>
            <h2>Iniciar sesión</h2>

            <SocialButtons />

            <p>O utiliza tu correo electrónico</p>

            <form onSubmit={ingresar}>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    autoComplete="email"
                    required
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    autoComplete="current-password"
                    required
                />

                <a href="#" className="login-forgot">
                    ¿Olvidaste tu contraseña?
                </a>

                {mensaje && <p className="login-message">{mensaje}</p>}

                <button type="submit">INGRESAR</button>
            </form>

            <button
                type="button"
                className="login-mobile-toggle"
                onClick={onToggle}
            >
                ¿No tienes una cuenta? <span>Regístrate</span>
            </button>
        </div>
    );
};

const Login = ({ onClose, onLoginSuccess }) => {
    const [activeView, setActiveView] = useState("login");

    const navigate = useNavigate();
    const location = useLocation();
    const background = location.state?.background;

    const cerrar = () => {
        if (background) navigate(-1);
        else navigate("/", { replace: true });
    };

    const toggleView = () => {
        setActiveView(
            activeView === "login" ? "register" : "login"
        );
    };

    const registrarUsuario = (nuevoUsuario, setMensaje) => {
        const usuariosGuardados = JSON.parse(
            localStorage.getItem("detallesDeluxeUsuarios") || "[]"
        );

        const existe = usuariosGuardados.some(
            (usuario) => usuario.correo === nuevoUsuario.correo
        );

        if (existe) {
            setMensaje("Este correo ya se encuentra registrado.");
            return;
        }

        usuariosGuardados.push(nuevoUsuario);

        localStorage.setItem(
            "detallesDeluxeUsuarios",
            JSON.stringify(usuariosGuardados)
        );

        onLoginSuccess({
            nombre: nuevoUsuario.nombre,
            apellido: nuevoUsuario.apellido,
            correo: nuevoUsuario.correo
        });
    };

    const iniciarSesion = (datos, setMensaje) => {
        const usuariosGuardados = JSON.parse(
            localStorage.getItem("detallesDeluxeUsuarios") || "[]"
        );

        const usuarioEncontrado = usuariosGuardados.find(
            (usuario) =>
                usuario.correo === datos.correo &&
                usuario.contrasena === datos.contrasena
        );

        if (!usuarioEncontrado) {
            setMensaje("Correo o contraseña incorrectos.");
            return;
        }

        onLoginSuccess({
            nombre: usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido,
            correo: usuarioEncontrado.correo
        });
    };

    useEffect(() => {
        const alPulsar = (e) => { if (e.key === "Escape") cerrar(); };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", alPulsar);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", alPulsar);
        };
    }, [cerrar]);

    const cerrarModal = (e) => {
        if (e.target === e.currentTarget) cerrar();
    };



    return (
        <div className="login-modal-overlay" onClick={cerrarModal}>
            <div
                className="login-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="login-modal-close"
                    onClick={cerrar}
                    aria-label="Cerrar ventana"
                >
                    <i className="bi bi-x-lg"></i>
                </button>

                <div className="login-container-card">
                    <div className="login-card">

                        <CardBackground activeView={activeView} />

                        <HeroPanel
                            type="register"
                            activeView={activeView}
                            title="¡Qué bueno verte!"
                            text="Inicia sesión y descubre todos los detalles especiales que tenemos para ti."
                            buttonText="INICIAR SESIÓN"
                            onToggle={toggleView}
                        />

                        <RegisterForm
                            activeView={activeView}
                            onToggle={toggleView}
                            onRegister={registrarUsuario}
                        />

                        <HeroPanel
                            type="login"
                            activeView={activeView}
                            title="¡Hola!"
                            text="Crea tu cuenta y comienza a compartir momentos inolvidables."
                            buttonText="CREAR CUENTA"
                            onToggle={toggleView}
                        />

                        <LoginForm
                            activeView={activeView}
                            onToggle={toggleView}
                            onLogin={iniciarSesion}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
