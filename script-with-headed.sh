while sleep 1; do
    npx playwright test tests/checkout.spec.ts --headed --retries=1000;
done
