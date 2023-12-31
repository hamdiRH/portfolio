import Footer from './Footer'
import Slider from './Slider'
import Icon1 from '../../../assets/images/icons/icon-1.svg'
import Icon2 from '../../../assets/images/icons/icon-2.svg'
import Icon3 from '../../../assets/images/icons/icon-3.svg'
import Icon4 from '../../../assets/images/icons/icon-4.svg'
import Icon5 from '../../../assets/images/icons/icon-5.svg'
import Icon6 from '../../../assets/images/icons/icon-6.svg'

const About = () => {
    return (
        <div className="tab_item bg-slate-50 dark:bg-[#111111] rounded-xl mb-14">
            <div className="pt-16 px-12 mt-8">
                <div>
                    <h2 className="text-4xl text-slate-900 font-roboto-slab dark:text-slate-50 font-bold relative after:contents[] after:w-36 after:h-[2px] after:bg-primary after:absolute after:top-1/2 -translate-y-1/2 after:right-8 after:left-52">
                        About Me
                    </h2>
                    <p className="text-gray-700 dark:text-slate-500 leading-7 font-medium">
                        Hi, I'm [Hamdi Rahal], a Full Stack Javascript Developer
                        🚀 from Tunisia, passionate about javascript ecosystem.
                        enjoy turning complex problems into simple, focused on
                        creating modern web apps. Beside's programming, I enjoy
                        playing video games.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default About
