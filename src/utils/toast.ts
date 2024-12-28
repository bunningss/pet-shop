import { toast } from "sonner";

export function successNotification(message: string, description: string = "") {
  toast.success(message, {
    description: description,
    closeButton: true,
  });
}

export function errorNotification(message: string, description: string = "") {
  toast.error(message, {
    description: description,
    closeButton: true,
  });
}

export function warningNotification(message: string, description: string = "") {
  toast.warning(message, {
    description: description,
    closeButton: true,
  });
}

export function infoNotification(message: string, description: string = "") {
  toast.info(message, {
    description: description,
    closeButton: true,
  });
}
