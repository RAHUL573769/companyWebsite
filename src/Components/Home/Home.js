import React from 'react';
import { Link } from 'react-router-dom';
import Vmc from '../../Vmc';
import Slider from '../Slider/Slider';

import Service1 from  "../../download1.jpg"
import Services from '../../Services';

const Home = () => {
    return (


        <div>

      <Slider></Slider>
            <section className='section'>
                <div className="container">
                    
                    <div className="row">

                        <div className="col-md-12 text-center">
                            <h3> Our Company</h3>
                            <div className="underline mx-auto"></div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi vitae omnis, error eius totam veniam excepturi deserunt, laudantium fugit repudiandae facilis. Autem consequatur, ex, quidem voluptate amet sed, eaque rerum dolorem quasi nisi ad saepe voluptatem facilis aspernatur sint eum. Voluptas, magni hic? Perferendis aut blanditiis optio. Esse, inventore!</p>
                        
                        <Link className='btn btn-primary' to={'/about'}>Read More</Link>
                        
                        </div>
                    </div>
</div>

            </section>
            <Vmc></Vmc>
            
{/* 
            Services */}


<Services></Services>
        </div>
    );
};

export default Home;