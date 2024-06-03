import { insertData } from "@/pages/api/timeReport";
import React, { useState } from "react";
import router from "next/router";

const TimeReportComponent = () => {
    const [formData, setFormData] = useState({name: "", startTime: "", endTime: "", totalHoursWorkedForTheDay: "",description: "",date: ""});

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const responseData = await insertData(formData);
            console.log("Form data submitted successfully:", responseData);
            router.push('/posts/Home');
        } catch (error:any) {
            console.error(error.message);
        }
    };

    return (
        <div className="form-container-report">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startTime">Start Time:</label>
                    <input
                        type="time"
                        id="startTime"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="endTime">End Time:</label>
                    <input
                        type="time"
                        id="endTime"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="totalHoursWorkedForTheDay">Daily Hours:</label>
                    <input
                        type="number"
                        id="totalHoursWorkedForTheDay"
                        name="totalHoursWorkedForTheDay"
                        value={formData.totalHoursWorkedForTheDay}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Enter your total hours worked for the day"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Write what you did"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn-submit btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default TimeReportComponent;
