import { Link } from 'react-router-dom';
import bgImage from '../assets/images/backgroungImage.jpg'; 

function BackgroundSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      className="text-black d-flex justify-content-center align-items-center"
    >
        <div className="jumbotron p-4 p-md-5 rounded bg-light">
            <div className="container">
                <h1 className="display-4 mb-3">Bounjour</h1>
                <h1 className="lead">
                    Welcome to our Store !!
                </h1>   
                <hr className="my-4" />
                <p className="mb-4">
                    to view our recently released products <br/> click down below  
                </p>
                <Link to="/products" className="btn btn-secondary btn-lg">
                  explore our store
                </Link>
            </div>
        </div>
      
    </div>
  );
}

export default BackgroundSection;
