import { Request, Response } from "express";
import AuthModel from "../model/AuthModel";
import taskModel from "../model/taskModel";

export const createTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { task, priority } = req.body;

    const user = await AuthModel.findById(id);

    const tasked = await taskModel.create({
      name: user?.userName,
      task,
      priority,
      avatar: user?.avatar,
    });

    res.status(201).json({
      message: "task created",
      data: tasked,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error creating task",
    });
  }
};
export const readTask = async (req: Request, res: Response) => {
  try {

    const tasked = await taskModel.find();

    res.status(200).json({
      message: "task read",
      data: tasked,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error reading task",
    });
  }
};
export const readOneTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tasked = await taskModel.findById(id);

    res.status(200).json({
      message: "one task read",
      data: tasked,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error reading one task",
    });
  }
};
export const updateStateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { stateData} = req.body
    const tasked = await taskModel.findByIdAndUpdate(id, 
        { stateData},
        { new:true},
        );

    res.status(200).json({
      message: "update state task successfully",
      data: tasked,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error updating state task",
    });
  }
};
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tasked = await taskModel.findByIdAndDelete(id);

    res.status(200).json({
      message: "task deleted",
      data: tasked,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error deleting task",
    });
  }
};
