import { Parallax } from 'react-parallax';
import bh from '../images/bh.jpg'


const ImageThree = () => (
    <Parallax className='image'  bgImage={bh} strength={800}>
        <div className='content'>
            <span className='images-txt'>bluetooth Headset</span>

        </div>
    </Parallax>
);

export default ImageThree

