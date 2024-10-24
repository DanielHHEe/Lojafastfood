import { CheckoutSteps } from "@/types/checkout-steps";
import { Dispatch, SetStateAction } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseCheckoutStore } from "@/stores/checkout-store";
import { FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { SelectContent } from "@radix-ui/react-select";

const formSchema = z.object({
  Rua: z.string().min(2, { message: "Preencha o endereço" }),
  Número: z.string().min(2, { message: "Preencha o número da casa" }),
  Complemento: z.string().optional(),
  Bairro: z.string().min(2, { message: "Preencha o bairro" }),
  Estado: z.string().min(2, { message: "Preencha o estado" }),
  Cidade: z.string().min(2, { message: "Preencha a cidade" }),
});

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
};

export const StepEndereço = ({ setStep }: Props) => {
  const { endereço, setendereço } = UseCheckoutStore((state) => state);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...endereço },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setendereço(values);
    setStep("finalizar");
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <FormField
          defaultValue={'Rua'}
            control={form.control}
            name="Rua"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    style={{ padding: "25px", textAlign: "center" }}
                    autoFocus
                    placeholder="Rua"
                    className="text-xl placeholder:text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage style={{ color: "red", fontSize: "16px" }} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Número"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    style={{ padding: "25px", textAlign: "center" }}
                    autoFocus
                    placeholder="Número"
                    className="text-xl placeholder:text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage style={{ color: "red", fontSize: "16px" }} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Complemento"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    style={{ padding: "25px", textAlign: "center" }}
                    autoFocus
                    placeholder="Complemento"
                    className="text-xl placeholder:text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage style={{ color: "red", fontSize: "16px" }} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Bairro"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    style={{ padding: "25px", textAlign: "center" }}
                    autoFocus
                    placeholder="Bairro"
                    className="text-xl placeholder:text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage style={{ color: "red", fontSize: "16px" }} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Cidade"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    style={{ padding: "25px", textAlign: "center" }}
                    autoFocus
                    placeholder="Cidade"
                    className="text-xl placeholder:text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage style={{ color: "red", fontSize: "16px" }} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Estado"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                    <Select defaultValue={field.value} onValueChange={field.onChange}>
                        <SelectTrigger  style={{ fontSize: "18px", padding: "25px", textAlign: "center" }}>
                            <SelectValue placeholder="Estado"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem style={{fontSize:'18px'}} value="MA">Ma</SelectItem>
                            <SelectItem style={{fontSize:'18px'}}  value="PI">Pi</SelectItem>
                            <SelectItem style={{fontSize:'18px'}}  value="CE">Ce</SelectItem>
                            <SelectItem style={{fontSize:'18px'}}  value="PE">Pe</SelectItem>
                           
                        </SelectContent>
                    </Select>
                 
                </FormControl>
                <FormMessage style={{ color: "red", fontSize: "16px" }} />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-between mt-6">
         

          <Button
            style={{ fontSize: "18px", opacity: "0.", color: "white", backgroundColor: '#007FFF' }}
            type="button" 
            variant="outline"
            onClick={() => setStep('user')}
          >
            Voltar
          </Button>
          
          <Button
            style={{ fontSize: "18px", opacity: "0.", color: "white", backgroundColor: "#007FFF" }}
            type="submit"
            variant="outline"
          >
            Concluir
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
