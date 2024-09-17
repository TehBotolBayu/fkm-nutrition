import React from 'react'

const index = () => {
  return (
                  <div className="w-full px-4 ">
                <div className="mx-auto max-w-[570px] text-center ">
                  <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                    <span>
                      Cek Berat Badan Ideal Anda dengan Kalkulator BMI
                    </span>
                  </h2>
                </div>
                
                <div className=" flex md:flex-row flex-col py-5 px-14 justify-center ">
                  <div className="mx-4 md:w-80 ">
                    <form className=" mx-auto">
                      <div className="mb-5">
                        <label
                          htmlFor=""
                          className="block mb-2 text-lg font-medium text-white"
                        >
                          Nama
                        </label>
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          id=""
                          className=" bg-white bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor=""
                          className="block mb-2 text-lg font-medium text-white"
                        >
                          Usia
                        </label>
                        <input
                          onChange={(e) => setUsia(e.target.value)}
                          type="number"
                          id=""
                          className="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor=""
                          className="block mb-2 text-lg font-medium text-white"
                        >
                          Berat Badan (kg)
                        </label>
                        <input
                          onChange={(e) => setBerat(e.target.value)}
                          type="number"
                          id=""
                          className="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          htmlFor=""
                          className="block mb-2 text-lg font-medium text-white"
                        >
                          Tinggi Badan (cm)
                        </label>
                        <input
                          onChange={(e) => setTinggi(e.target.value)}
                          type="number"
                          id=""
                          className="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          required
                        />
                      </div>
                    </form>
                  </div>
                  <div className="mx-4 md:w-80">
                    <form className=" mx-auto">
                      <div className="mb-5">
                        <label
                          htmlFor="countries"
                          className="block mb-2 text-lg font-medium text-white"
                        >
                          Pekerjaan
                        </label>
                        <select
                          onChange={(e) => setPekerjaan(e.target.value)}
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option>Ibu Rumah Tangga</option>
                          <option>PNS</option>
                          <option>SWASTA</option>
                          <option>Lainnya</option>
                        </select>
                      </div>

                      <div className="mb-5">
                        <SelectionCard set={setGender} />
                      </div>
                      <div className="mb-5">
                        <CardSlider set={setActivity} />
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="mx-auto max-w-[570px] text-center"
                  onClick={() => handleSubmit()}
                >
                  <div className="cursor-pointer inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]">
                    Hitung BMI
                  </div>
                </div>
              </div>
  )
}
export default index