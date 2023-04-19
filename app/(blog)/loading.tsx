const Loading = () => (
    <main className="animate-pulse grow mx-8 lg:mx-10 xl:mx-12 mt-4 mb-6
        flex flex-col gap-7 lg:flex-row lg:gap-[72px]">
        <div className="w-full lg:w-3/5 flex flex-col gap-7 lg:gap-0 justify-stretch">
            <div className="w-full h-1/4 flex items-center">
                <div className="w-full flex flex-wrap items-baseline">
                    <div className="h-12 mb-4 w-full rounded-full bg-secondary-200" />
                    <div className="h-6 w-1/2 rounded-full bg-secondary-200" />
                </div>
            </div>
            <div className="h-72 lg:h-3/4 rounded-[20px] bg-secondary-200"></div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col gap-7 justify-stretch">
            <div className="h-72 lg:h-1/2 rounded-[20px] bg-secondary-200" />
            <div className="h-72 lg:h-1/2 rounded-[20px] bg-secondary-200" />
        </div>
    </main>
)

export default Loading