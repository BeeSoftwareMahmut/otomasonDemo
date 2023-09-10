



const Hero = () => {
    return (
        <section className="flex w-5/5 mx-auto justify-between  bg-slate-300 h-[400px] ">
            <div className="w-2/4 h-96">
                <div className="flex flex-col justify-center  gap-8 w-2/4 mx-auto mt-20 ">
                <span className="text-lg font-bold ">Bu sezonda en iyisini bul 🎬</span>
                <h1 className="text-2xl font-extrabold">Herkese Özel Koleksiyon</h1>
              <button className="text-lg text-white bg-slate-950 rounded-2xl p-2 w-2/4 hover:bg-stone-50 hover:text-slate-950 ">
                Şimdi Keşfet
              </button>
            </div>
            </div>
            <div className="w-2/4 h-96">
            <div className="flex justify-start">
                <img className="w-3/5" src="ımages/hero.png" alt="nnn" />
            </div>
            </div>
        </section>
    )
}

export default Hero;