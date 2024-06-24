import { skills } from '../constants'

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Привет, меня зовут <span className='blue-gradient_text font-semibold drop-shadow'>Матвей</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
         Я backend разрабочик, обучаюсь в Дальневосточном федеральном университете на 3 курсе.
        </p>
      </div>
    <div className='py-10 flex flex-col'>
      <h3 className='subhead-text'>Мои скиллы</h3>

      <div className='mt-16 flex flex-wrap gap-12'>
      {skills.map((skill) => (
        <div className='block-container w-20 h-20' key={skill.name}>
            <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name} 
                  className='w-1/2 h-1/2 object-container'
                  />
            </div>
        </div>
      ))}

      </div>
    </div>
  </section>
  )
}

export default About
