import Stripe from "stripe";

class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
}

class NotFoundDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundDataError";
  }
}

interface Checkout {
  id: string;
  amount: number;
}

function ValidateCheckout(body: unknown) {
  const { id, amount } = body as Checkout;

  if (!id || id.length <= 0) throw new DataError("Payment id is required");
  if (!amount || amount <= 0) throw new DataError("Amount is required");

  if (typeof id !== "string")
    throw new DataError("Payment id must be a string");
  if (isNaN(amount)) throw new DataError("Amount must be a number");

  return { id, amount};
}

const stripe = new Stripe(
  "sk_test_51OFqy6G5vLVbLYUKH8GxIvijZ5uiRIpZL9vD0enn7Qhdv6AwhIWalwKWEOMeo5zgOs113HVD1wJ73M8HEdDxszEC00oMNlVUx7"
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { id, amount } = ValidateCheckout(body);

    const { amount: amount_received } = await stripe.paymentIntents.create({
      amount,
      currency: "MXN",
      payment_method: id,
      confirm: true,
      automatic_payment_methods: { enabled: true, allow_redirects: "never" },
    });

    return Response.json(
      { data: { amount_received: (amount_received / 100) } },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof DataError) {
      return Response.json(
        {
          data: {
            error: error.message,
          },
        },
        { status: 400 }
      );
    }

    if (error instanceof Stripe.errors.StripeError) {
      return Response.json(
        {
          data: {
            error: error.type,
            message: error.message,
          },
        },
        { status: error.statusCode }
      );
    }

    return Response.json(
      {
        data: {
          message: "Internal server error",
        },
      },
      { status: 500 }
    );
  }
}
