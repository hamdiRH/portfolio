import Header from './components/Header'
import Resume from './components/Resume'
import Sidebar from './components/Sidebar'
import bgDark from '../../assets/images/bg-dark.jpg'

type Props = {}

const Portfolio = (props: Props) => {
    let bgLight = {
        backgroundImage: `url(${bgDark})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
    }
    return (
        <div style={bgLight} className="">
            <Header></Header>
            <main>
                <section className="main_section mt-40">
                    <div className="container grid grid-cols-12 lg:gap-10 border-4 border-blue-500">
                        {/* Sidebar */}
                        <Sidebar />
                        {/* right site */}
                        <Resume />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Portfolio
