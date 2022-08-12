import { Button, Input } from 'arvara'
import React, { useState } from 'react'

const Password = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');


    const handleCuurent = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(e.target.value);
    const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value);
    const handleConfirm = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmNewPassword(e.target.value);
    const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const values = {
              currentPassword,
              newPassword,
              confirmNewPassword,
        };
        console.log(values);
    };

    return (
        <section>
            <div className="p-2">
                <form onSubmit={onFinish}>
                    <Input
                        label="Current Password"
                        placeholder="Current Password"
                        onChange={handleCuurent}
                        value={currentPassword}
                        className="mt-5"
                    //   TrailingIcon={() => (
                    //     <AIarrowdown1Outlin/>
                    //   )}
                    />
                    <Input
                        label="New Password"
                        placeholder="New Password"
                        onChange={handleNewPassword}
                        value={newPassword}
                        className="mt-5"
                    />
                    <Input
                        label="Confirm New Password"
                        placeholder="Confirm New Password"
                        onChange={handleConfirm}
                        value={confirmNewPassword}
                        className="mt-5"
                    />

                    <div className="mt-8">
                        <Button type="button" className="w-full">
                            Update
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Password
