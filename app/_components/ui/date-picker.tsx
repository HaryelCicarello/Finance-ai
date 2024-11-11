"use client";

import * as React from "react";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";

import * as utils from "@/app/_lib/utils";
import * as button from "./button";
import * as calendar from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { SelectSingleEventHandler } from "react-day-picker";

interface DatePickerProps {
  value?: Date;
  onChange?: SelectSingleEventHandler;
}

export const DatePicker = ({ value, onChange }: DatePickerProps) => {
  const [] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button.Button
          variant={"outline"}
          className={utils.cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? (
            new Date(value).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
          ) : (
            <span>Selecione uma data...</span>
          )}
        </button.Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <calendar.Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  );
};
