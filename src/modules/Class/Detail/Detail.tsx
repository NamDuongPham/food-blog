import { useEffect, useState } from "react";
import { AiFillClockCircle, AiOutlineCheck } from "react-icons/ai";
import { IoIosAdd } from "react-icons/io";
import courseData from "./data";
import { BsFilm, BsSpeedometer } from "react-icons/bs";
import { BiSolidBatteryCharging } from "react-icons/bi";
import { Module, TClass } from "../../../types/class";


export default function Detail() {
      const [data, setData] = useState<TClass>();
      const [onDetail, setOnDetail] = useState(false);
      const [selectedModule, setSelectedModule] = useState<Module | null>(null);

      useEffect(() => {
            const dataClass = localStorage.getItem("class");
            if (dataClass !== null) {
                  console.log(JSON.parse(dataClass));
                  setData(JSON.parse(dataClass));
                  console.log(data);
            }
      }, []);

      const handleModuleClick = (module: Module) => {
            setSelectedModule(module);
      }

      return (
            <div className="px-2 flex">
                  <div className="px-2 w-2/3">
                        <h2 className="font-bold text-4xl py-4">{data?.name}</h2>
                        <p>{data?.description}</p>
                        <h3 className="font-bold text-3xl pt-8 py-2">What will you learn?</h3>
                        <ul className="grid grid-cols-3 gap-2">
                              <li className="flex flex-row items-center gap-1"><span className="text-orange-500"><AiOutlineCheck /></span> Understanding Farm-to-Table Philosophy</li>
                              <li className="flex flex-row items-center gap-1"><span className="text-orange-500"><AiOutlineCheck /></span> Seasonal Menu Planning</li>
                              <li className="flex flex-row items-center gap-1"><span className="text-orange-500"><AiOutlineCheck /></span> Cooking Techniques</li>
                              <li className="flex flex-row items-center gap-1"><span className="text-orange-500"><AiOutlineCheck /></span> Recipe Development</li>
                              <li className="flex flex-row items-center gap-1"><span className="text-orange-500"><AiOutlineCheck /></span> Food Pairing and Presentation</li>
                              <li className="flex flex-row items-center gap-1"><span className="text-orange-500"><AiOutlineCheck /></span> Food Safety</li>
                        </ul>
                        <h3 className="font-bold text-3xl pt-8 py-2">Course Title: {data?.name}</h3>
                        {courseData.map((item, index) => (
                              <div key={index} className="flex flex-col">
                                    <button
                                          className="btn btn-primary flex flex-1 justify-between"
                                          onClick={() => {
                                                handleModuleClick(item);
                                                setOnDetail(!onDetail);
                                          }}
                                    >
                                          <IoIosAdd />
                                          <div className="ml-4 flex flex-1 justify-between">
                                                <p className="px-2">{item.moduleTitle}</p>
                                                <p>{item.lessons.length} lessons</p>
                                          </div>
                                    </button>
                                    {(selectedModule === item && onDetail) && (
                                          <div>
                                                {item.lessons.map((lesson, lessonIndex) => (
                                                      <div key={lessonIndex} className="ml-16 my-1">
                                                            <p className="font-bold">{lesson.lessonTitle}</p>
                                                            <ul className="ml-2 mt-2 mb-2">
                                                                  {lesson.topics.map((topic, topicIndex) => (
                                                                        <li key={topicIndex}>• {topic}</li>
                                                                  ))}
                                                            </ul>
                                                      </div>
                                                ))}
                                          </div>
                                    )}
                              </div>
                        ))}
                  </div>
                  <div className="flex flex-col flex-1 items-center ">
                        <div className="bg-slate-300 p-8 mt-16 rounded-2xl flex flex-col items-center">
                              <h2 className="mb-4 text-center justify-center text-3xl text-orange-500">
                                    {(!data?.price) ? "Class Free" : `Class with a fee of ${data?.price}$`}
                              </h2>
                              <button className="w-32 mb-4">Register</button>
                              <ul>
                                    <li className="flex gap-3 my-1">
                                          <BsSpeedometer />
                                          <p>Basic qualifications</p>
                                    </li>
                                    <li className="flex gap-3 my-1">
                                          <BsFilm />
                                          <p>Total {courseData.length} modules</p>
                                    </li>
                                    <li className="flex gap-3 my-1">
                                          <AiFillClockCircle />
                                          <p>Duration 04 hours 25 minutes</p>
                                    </li>
                                    <li className="flex gap-3 my-1">
                                          <BiSolidBatteryCharging />
                                          <p>Study every time and everywhere</p>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
}
