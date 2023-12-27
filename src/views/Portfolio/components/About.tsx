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
                        I'm Creative Director and UI/UX Designer from Sydney,
                        Australia, working in web development and print media. I
                        enjoy turning complex problems into simple, beautiful
                        and intuitive designs.
                    </p>
                    <p className="text-gray-700 dark:text-slate-500 leading-7 font-medium mt-3">
                        My aim is to bring across your message and identity in
                        the most creative way. I created web design for many
                        famous brand companies.
                    </p>

                    <h3 className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4">
                        What I do!
                    </h3>
                </div>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                    <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
                        <div>
                            <img className="w-28" src={Icon1} alt="icon-1" />
                        </div>
                        <div>
                            <h4 className="dark:text-white text-xl font-semibold">
                                Ui/Ux Design
                            </h4>
                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam euismod volutpat.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
                        <div>
                            <img className="w-28" src={Icon2} alt="icon-2" />
                        </div>
                        <div>
                            <h4 className="dark:text-white text-xl font-semibold">
                                App Development
                            </h4>
                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam euismod volutpat.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
                        <div>
                            <img className="w-28" src={Icon3} alt="icon-3" />
                        </div>
                        <div>
                            <h4 className="dark:text-white text-xl font-semibold">
                                Photography
                            </h4>
                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam euismod volutpat.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
                        <div>
                            <img className="w-28" src={Icon4} alt="icon-4" />
                        </div>
                        <div>
                            <h4 className="dark:text-white text-xl font-semibold">
                                Photography
                            </h4>
                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam euismod volutpat.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
                        <div>
                            <img className="w-28" src={Icon5} alt="icon-5" />
                        </div>
                        <div>
                            <h4 className="dark:text-white text-xl font-semibold">
                                Management
                            </h4>
                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam euismod volutpat.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 rounded-md border border-slate-200 dark:border-slate-800 flex gap-5">
                        <div>
                            <img className="w-28" src={Icon6} alt="icon-6" />
                        </div>
                        <div>
                            <h4 className="dark:text-white text-xl font-semibold">
                                Web Development
                            </h4>
                            <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit, sed diam euismod volutpat.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-4xl text-slate-900 dark:text-slate-50 font-semibold pt-6 pb-4">
                        My Client!
                    </h3>
                    <Slider></Slider>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default About
