export default function Page() {
    return (
        <>
            <section className="bg-gray-200">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-4xl xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                            <div className="text-center">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                                    Create Account
                                </h1>
                                <p className="text-sm font-light text-gray-500">
                                    Already have an account? <a href="/login" className="font-medium text-blue-700 hover:underline ">Sign in</a>
                                </p>
                            </div>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <div className="flex flex-row mb-3">
                                        <div className="w-full">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Nome Completo*</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div className="w-4"></div>
                                        <div className="w-full">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">CPF*</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>
                                    </div>

                                    <div className="flex flex-row mb-3">
                                        <div className="w-full">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div className="w-4"></div>
                                        <div className="w-full">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>
                                    </div>

                                    <div className="flex flex-row mb-3">
                                        <div className="w-full">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div className="w-4"></div>
                                        <div className="w-full">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>
                                    </div>
                                    <div className="flex flex-row mb-3">
                                        <div className="w-full">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your email</label>
                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                                        </div>
                                        <div className="w-4"></div>
                                        <div className="w-full">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-700 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
