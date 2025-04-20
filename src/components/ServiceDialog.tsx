
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ServiceDialogProps {
  isOpen: boolean
  onClose: () => void
  service: {
    title: string
    description: string
    details: string
  }
}

const ServiceDialog = ({ isOpen, onClose, service }: ServiceDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-navy border border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold mb-2">{service.title}</DialogTitle>
          <DialogDescription className="text-white/70">
            <p className="mb-4">{service.description}</p>
            <div className="text-white/90 leading-relaxed">
              {service.details}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ServiceDialog;
