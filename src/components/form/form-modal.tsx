"use client";
import React from "react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface FormModalProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: (data: TFieldValues) => void;
  children: React.ReactNode;
  formLabel: string;
  icon?: keyof typeof dynamicIconImports;
  loading: boolean;
  disabled: boolean;
  setIsModalOpen?: (data: boolean) => void;
  withCancelButton?: boolean;
}

export function FormModal<TFieldValues extends FieldValues>({
  form,
  onSubmit,
  children,
  formLabel,
  icon,
  loading,
  disabled,
  setIsModalOpen,
  withCancelButton,
}: FormModalProps<TFieldValues>) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {children}
        <div className={`grid gap-2 ${withCancelButton ? "grid-cols-2" : ""}`}>
          <Button
            icon={icon}
            type="submit"
            className="w-full"
            loading={loading}
            disabled={disabled}
          >
            {formLabel}
          </Button>
          {withCancelButton && (
            <Button
              icon="x"
              type="button"
              variant="destructive"
              className="w-full"
              loading={loading}
              disabled={disabled}
              onClick={() =>
                setIsModalOpen ? setIsModalOpen(false) : undefined
              }
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}
