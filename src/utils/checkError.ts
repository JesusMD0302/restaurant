import { type SetStateAction } from "react";

export function checkError(
  error: string,
  message: string,
  handler: (value: SetStateAction<string | null>) => void
) {
  switch (error) {
    case "StripeCardError":
      switch (message) {
        case "Your card was declined.":
          handler("Su targeta fue declinada");
          break;
        case "Your card has expired.":
          handler("Su targeta ha expirado");
          break;
        case "Your card's security code is incorrect.":
          handler("Su codigo cvv es incorrecto");
          break;
        default:
          handler("Ocurrio un error con el metodo de pago");
          break;
      }
      break;
    case "StripeInvalidRequestError":
      handler("Ocurrio un error con la petición.");
      break;
    default:
      handler("Ocurrio un problema con Stripe.");
      break;
  }
}
