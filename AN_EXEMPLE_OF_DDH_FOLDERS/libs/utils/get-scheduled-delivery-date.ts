const DELIVERY_DURATION = 20*60000 // delivery time of 20 minutes
export const getScheduledDeliveryDate = (): string => {
    const currentTime = new Date();
    const scheduledDeliveryDate = new Date(currentTime.getTime()+DELIVERY_DURATION);
    return(scheduledDeliveryDate.toLocaleTimeString());
}