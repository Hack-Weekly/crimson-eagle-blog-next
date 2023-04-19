const Stats = () => (
    <div className="w-full border border-secondary shadow p-8 flex flex-col">
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium">Whatever else people put in a dashboard</h2>
        <div className="mt-4 grid grid-cols-2 gap-4 justify-items-center">
            <svg className="w-[100px] h-[100px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100">
                <g fill="#E9E2ED">
                    <rect x={ 0 } y={ 30 } width={ 18 } height={ 20 } />
                    <rect x={ 27 } y={ 50 } width={ 18 } height={ 30 } />
                    <rect x={ 54 } y={ 10 } width={ 18 } height={ 50 } />
                    <rect x={ 81 } y={ 60 } width={ 18 } height={ 30 } />
                </g>
                <g fill="#945D87">
                    <rect x={ 0 } y={ 50 } width={ 18 } height={ 50 } />
                    <rect x={ 27 } y={ 80 } width={ 18 } height={ 20 } />
                    <rect x={ 54 } y={ 60 } width={ 18 } height={ 40 } />
                    <rect x={ 81 } y={ 70 } width={ 18 } height={ 30 } />
                </g>
            </svg>
            <svg className="w-[100px] h-[100px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100">
                <g transform="rotate(30, 50, 50)">
                    <circle r={ 50 } cx={ 50 } cy={ 50 } fill="#945D87" />
                    <path d="M50 50 L50 0 A50 50, 0, 0 1, 100 50 L50 50" fill="#E9E2ED" />
                </g>
            </svg>
        </div>
    </div>
)

export default Stats