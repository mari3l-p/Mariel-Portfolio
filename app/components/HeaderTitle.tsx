
type HeaderProps = {
    text1: string;
    text2: string;
    bold: string;
    title: string;
    link: string;
}

const HeaderTitle = ({text1, bold, text2, title, link}: HeaderProps) => {
  return (
    <div className='my-10'>
        <div>
          <h1 className='text-4xl font-bold'>{title}</h1>
          <p className='text-(--gray) font-medium text-xl my-5'>{text1}<a href={link} target='_blank' className='underline text-(--light-blue) hover:text-(--blue)'>{bold}</a> {text2}</p>
        </div>
        <hr className='text-(--gray)'/>
    </div>
  )
}

export default HeaderTitle