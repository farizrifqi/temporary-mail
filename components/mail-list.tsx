"use client";
import React, { useEffect, useRef, useState } from "react";
import { useEnvelope } from "@/lib/store/envelope";
import MailDetail from "@/components/mail-detail";
import { DELIMITER } from "@/lib/constant";
import { Howl } from "howler";
import { toast } from "sonner";
import { mailTime } from "@/lib/utils";

function MailList() {
  const [envelope, admin] = useEnvelope((state) => [state.list, state.admin]);
  const prevLengthRef = useRef(-1);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (
      initialized &&
      prevLengthRef.current !== -1 &&
      envelope.length !== prevLengthRef.current
    ) {
      new Howl({
        src: ["/tone.wav"],
        html5: false,
        volume: 0.7,
        preload: true,
      }).play();
      toast.success("A new email delivered!");
    }
    if (!initialized && prevLengthRef.current > -1) {
      setInitialized(true);
    }
    prevLengthRef.current = envelope.length;
  }, [envelope]);

  return (
    <div className="flex flex-1 flex-col overflow-auto">
      {envelope.map((value) => (
        <MailDetail key={value.key} envelope={value}>
          <div className="cursor-pointer border-b px-4 py-3 hover:bg-secondary">
            <div className="flex items-center justify-between">
              <span className="font-medium">{value.subject}</span>
              {admin && (
                <span className="text-sm text-muted-foreground">
                  {value.key.split(DELIMITER)[1]}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span>{value.fromName}</span>
              <span className="text-sm">{mailTime(value.date)}</span>
            </div>
          </div>
        </MailDetail>
      ))}
    </div>
  );
}

export default MailList;
