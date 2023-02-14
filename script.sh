while sleep 1; do
    npx playwright test tests/checkout.spec.ts --retries=1000;
done
