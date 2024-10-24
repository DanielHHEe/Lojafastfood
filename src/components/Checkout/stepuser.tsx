import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseCheckoutStore } from "@/stores/checkout-store";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const formSchema = z.object({
 
  name: z
    .string()
    .min(2, { message: "No mínimo 2 caracteres" })
    .regex(/^[^\d]+$/, { message: "O nome não pode conter números" }), 
});

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
};

export const StepUser = ({ setStep }: Props) => {
  const { name, setName } = UseCheckoutStore((state) => state);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name);
    setStep("endereço");
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-20">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  style={{ padding: "25px", textAlign: "center" }}
                  autoFocus
                  placeholder="Qual o seu nome?"
                  className=" text-xl placeholder:text-lg "
                  {...field}
                />
              </FormControl>
              <FormMessage style={{ color: "red", fontSize: "16px" }} />
            </FormItem>
          )}
        />
        <Button style={{ fontSize: "18px", opacity: "0.", color: 'white',
             backgroundColor: '#007FFF' }} type="submit" variant="outline">
          Próximo
        </Button>
      </form>
    </FormProvider>
  );
};
