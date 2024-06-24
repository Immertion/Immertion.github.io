import { Link } from 'react-router-dom';
import { socialMedias } from '../constants';

const Contact = () => {
  return (
    <section className='max-container py-12'>
      <h1 className='head-text text-center mb-8'>
        Связаться со <span className='blue-gradient_text font-semibold drop-shadow'>мной</span>
      </h1>

      <div className='flex justify-center flex-wrap gap-12'>
        {socialMedias.map((socialMedia) => (
          <div className='block-container w-28 h-28 flex flex-col items-center justify-center' key={socialMedia.name}>
            <img
              src={socialMedia.iconUrl}
              alt={socialMedia.name}
              className='w-16 h-16 mb-4 transition-transform duration-300 hover:scale-110'>
            </img>

            <Link
              to={socialMedia.link}
              target='_blank'
              rel='noopener noreferrer'
              className='font-semibold text-blue-600 transition-colors duration-300 hover:text-blue-800'>
              {socialMedia.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
