export default function gallery({ children, modal }) {
    return (
          <div>
            <h1>Welcome !</h1>
            {children}
            {modal}
          </div>
    );
  }