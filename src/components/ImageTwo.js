import { Parallax } from 'react-parallax';
import bs from '../images/bs.jpg'


const ImageTwo = () => (
    <Parallax className='image'  bgImage={bs} strength={800}>
        <div className='content'>
            <span className='images-txt'>bluetooth speaker</span>

        </div>
    </Parallax>
);

export default ImageTwo

