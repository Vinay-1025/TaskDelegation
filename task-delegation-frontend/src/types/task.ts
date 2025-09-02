// src/types/task.ts

export interface Task {
    _id: string;
    title: string;
    description?: string;
    status: 'pending' | 'in-progress' | 'completed';
    dueDate?: string;
    assignedTo?: {
      _id: string;
      name: string;
      email: string;
    } | null;
    assignedTeam?: {
      _id: string;
      name: string;
    } | null;
    createdBy?: {
      _id: string;
      name: string;
      email: string;
    };
    createdAt?: string;
    updatedAt?: string;
  }
  